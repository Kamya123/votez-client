// Internal Imports
import { lazy, LazyExoticComponent } from 'react';

// External Imports
import { clsx, ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Lazy loads a component based on the provided component path.
 *
 * @param componentPath - The path to the component file.
 * @returns Lazily imported component.
 */
export const lazyLoadComponent = (componentPath: string): LazyExoticComponent<any> => {
    return lazy(() => import(/* webpackChunkName: "[request]" */ `../${componentPath}`));
};

/**
 * Combines multiple class names using both clsx and Tailwind CSS's twMerge.
 * @param {...ClassValue[]} inputs - Variable number of class names or class condition objects.
 * @returns {string} - A string containing the merged class names.
 */
export const cn = (...inputs: ClassValue[]): string => {
    // Merge class names using clsx
    const mergedClassNames = clsx(inputs);

    // Further merge class names using Tailwind CSS's twMerge
    return twMerge(mergedClassNames);
};
