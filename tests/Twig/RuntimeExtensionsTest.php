<?php

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Tests\Twig;

use App\Twig\RuntimeExtensions;
use PHPUnit\Framework\TestCase;
use Twig\Node\Node;
use Twig\TwigFilter;
use Twig\TwigFunction;

/**
 * @covers \App\Twig\RuntimeExtensions
 */
class RuntimeExtensionsTest extends TestCase
{
    public function testGetFilters()
    {
        $expected = ['md2html', 'desc2html', 'comment2html'];
        $i = 0;

        $sut = new RuntimeExtensions();
        $twigFilters = $sut->getFilters();
        $this->assertCount(\count($expected), $twigFilters);

        foreach ($twigFilters as $filter) {
            $this->assertInstanceOf(TwigFilter::class, $filter);
            $this->assertEquals($expected[$i++], $filter->getName());
        }
    }

    public function testGetFunctions()
    {
        $expected = [
            'trigger',
            'actions',
            'javascript_translations',
            'active_timesheets',
            'encore_entry_css_source',
            'render_widget',
        ];

        $i = 0;

        $sut = new RuntimeExtensions();
        $twigFunctions = $sut->getFunctions();
        $this->assertCount(\count($expected), $twigFunctions);

        /** @var TwigFunction $filter */
        foreach ($twigFunctions as $filter) {
            $this->assertInstanceOf(TwigFunction::class, $filter);
            $this->assertEquals($expected[$i++], $filter->getName());
        }
    }

    public function testGetFilterDefinition()
    {
        $sut = new RuntimeExtensions();
        $filters = $sut->getFilters();

        $found_md2html = false;
        $found_desc2html = false;
        $found_comment2html = false;

        foreach ($filters as $filter) {
            switch ($filter->getName()) {
                case 'md2html':
                    self::assertEquals('html', $filters[0]->getPreEscape());
                    self::assertEquals(['html'], $filters[0]->getSafe(new Node()));
                    $found_md2html = true;
                    break;
                case 'desc2html':
                    self::assertEquals('html', $filters[1]->getPreEscape());
                    self::assertEquals(['html'], $filters[1]->getSafe(new Node()));
                    $found_desc2html = true;
                    break;
                case 'comment2html':
                    self::assertEquals('html', $filters[2]->getPreEscape());
                    self::assertEquals(['html'], $filters[2]->getSafe(new Node()));
                    $found_comment2html = true;
                    break;
            }
        }

        self::assertTrue($found_md2html, 'Missing filter: md2html');
        self::assertTrue($found_desc2html, 'Missing filter: desc2html');
        self::assertTrue($found_comment2html, 'Missing filter: comment2html');
    }
}
