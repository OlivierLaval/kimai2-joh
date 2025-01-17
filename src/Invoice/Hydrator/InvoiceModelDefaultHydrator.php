<?php

/*
 * This file is part of the Kimai time-tracking app.
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

namespace App\Invoice\Hydrator;

use App\Invoice\InvoiceModel;
use App\Invoice\InvoiceModelHydrator;

class InvoiceModelDefaultHydrator implements InvoiceModelHydrator
{
    public function hydrate(InvoiceModel $model): array
    {
        $currency = $model->getCurrency();
        $tax = $model->getCalculator()->getTax();
        $total = $model->getCalculator()->getTotal();
        $subtotal = $model->getCalculator()->getSubtotal();
        $formatter = $model->getFormatter();
        $entries = $model->getCalculator()->getEntries();

        $begin = null;
        if ($model->getQuery()->getBegin() !== null) {
            $begin = $model->getQuery()->getBegin();
        } elseif (!empty($entries)) {
            $begin = $entries[0];
        }

        $end = null;
        if ($model->getQuery()->getEnd() !== null) {
            $end = $model->getQuery()->getEnd();
        } elseif (!empty($entries)) {
            $end = array_keys($entries)[\count($entries) - 1];
        }

        $values = [
            'invoice.due_date' => $formatter->getFormattedDateTime($model->getDueDate()),
            'invoice.date' => $formatter->getFormattedDateTime($model->getInvoiceDate()),
            'invoice.number' => $model->getInvoiceNumber(),
            'invoice.currency' => $currency,
            'invoice.language' => $model->getTemplate()->getLanguage(), // since 1.9
            'invoice.currency_symbol' => $formatter->getCurrencySymbol($currency),
            'invoice.vat' => $model->getCalculator()->getVat(),
            'invoice.tax' => $formatter->getFormattedMoney($tax, $currency),
            'invoice.tax_nc' => $formatter->getFormattedMoney($tax, $currency, false),
            'invoice.tax_plain' => $tax,
            'invoice.total_time' => $formatter->getFormattedDuration($model->getCalculator()->getTimeWorked()),
            'invoice.duration_decimal' => $formatter->getFormattedDecimalDuration($model->getCalculator()->getTimeWorked()),
            'invoice.total' => $formatter->getFormattedMoney($total, $currency),
            'invoice.total_nc' => $formatter->getFormattedMoney($total, $currency, false),
            'invoice.total_plain' => $total,
            'invoice.subtotal' => $formatter->getFormattedMoney($subtotal, $currency),
            'invoice.subtotal_nc' => $formatter->getFormattedMoney($subtotal, $currency, false),
            'invoice.subtotal_plain' => $subtotal,

            'template.name' => $model->getTemplate()->getName(),
            'template.company' => $model->getTemplate()->getCompany(),
            'template.address' => $model->getTemplate()->getAddress(),
            'template.title' => $model->getTemplate()->getTitle(),
            'template.payment_terms' => $model->getTemplate()->getPaymentTerms(),
            'template.due_days' => $model->getTemplate()->getDueDays(),
            'template.vat_id' => $model->getTemplate()->getVatId(),
            'template.contact' => $model->getTemplate()->getContact(),
            'template.payment_details' => $model->getTemplate()->getPaymentDetails(),

            'query.begin' => '',
            'query.day' => '',                  // @deprecated
            'query.month' => '',                // @deprecated
            'query.month_number' => '',         // @deprecated
            'query.year' => '',                 // @deprecated
            'query.begin_day' => '',
            'query.begin_month' => '',
            'query.begin_month_number' => '',
            'query.begin_year' => '',
            'query.end' => '',                  // since 1.9
            'query.end_day' => '',              // since 1.9
            'query.end_month' => '',            // since 1.9
            'query.end_month_number' => '',     // since 1.9
            'query.end_year' => '',             // since 1.9
        ];

        if ($begin !== null) {
            $values = array_merge($values, [
                'query.begin' => $formatter->getFormattedDateTime($begin),
                'query.day' => $begin->format('d'),                             // @deprecated
                'query.month' => $formatter->getFormattedMonthName($begin),     // @deprecated
                'query.month_number' => $begin->format('m'),                    // @deprecated
                'query.year' => $begin->format('Y'),                            // @deprecated
                'query.begin_day' => $begin->format('d'),
                'query.begin_month' => $formatter->getFormattedMonthName($begin),
                'query.begin_month_number' => $begin->format('m'),
                'query.begin_year' => $begin->format('Y'),
                'query.end' => $formatter->getFormattedDateTime($end),          // since 1.9
                'query.end_day' => $end->format('d'),                           // since 1.9
                'query.end_month' => $formatter->getFormattedMonthName($end),   // since 1.9
                'query.end_month_number' => $end->format('m'),                  // since 1.9
                'query.end_year' => $end->format('Y'),                          // since 1.9
            ]);
        }

        return $values;
    }
}
