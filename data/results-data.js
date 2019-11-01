/*
** @author: Argert Boja
** @date: 23/10/2019
** @version: 1.0.0
** @org: ABEnt.
** @description: Adding local data for results
*/

// Imports
import ResultModel from '../models/ResultModel';

export const RESULTS = [
    new ResultModel(
        '1',
        'Tave Kosi',
        '30 min',
        'taveKosi',
        [
            'Vezë',
            'Qumësht',
            'Miell'
        ],
        [
            '2',
            '1 Gotë',
            '1 KG'
        ], [
        'Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta',
        'Hedhim miellin Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta Perziejme vezet per 5 minuta',
        'Piqeni per 30 minuta'
    ]),
    new ResultModel(
        '2',
        'Puding',
        '30 min',
        'puding',
        [
            'Vezë',
            'Qumësht',
            'Miell'
        ],
        [
            '2',
            '1 Gotë',
            '1 KG'
        ], [
        'Perziejme vezet per 5 minuta',
        'Hedhim miellin',
        'Piqeni per 30 minuta'
    ]),
    new ResultModel(
        '3',
        'Pasta Bolonjeze',
        '30 min',
        'pastaBolonjeze',
        [
            'Vezë',
            'Qumësht',
            'Miell'
        ],
        [
            '2',
            '1 Gotë',
            '1 KG'
        ], [
        'Perziejme vezet per 5 minuta',
        'Hedhim miellin',
        'Piqeni per 30 minuta'
    ]),
]