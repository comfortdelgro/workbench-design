/**
 * This file contains code adapted from the React Spectrum project.
 *
 * Copyright (c) 2018, Adobe Inc. and other contributors.
 * All rights reserved.
 *
 * This source code is licensed under the Apache License, Version 2.0
 * found in the LICENSE.txt file at the root directory of this source tree.
 */
type Field = 'era' | 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second' | 'dayPeriod' | 'timeZoneName' | 'weekday';
interface DisplayNames {
    of(field: Field): string;
}
export declare function useDisplayNames(): DisplayNames;
export {};