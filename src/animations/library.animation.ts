import { trigger, state, transition, style, animate } from '@angular/animations';

export const libraryAnimation =
    trigger('libraryAnimation', [
        transition(':enter', [
            style({
                transform: 'translateY(-50px)',
                opacity: '0'
            }),
            animate('.3s ease-out',
                style({
                    transform: '*',
                    opacity: '*'
                }))
        ]),
        transition(':leave', [
            style({
                transform: '*',
                opacity: '*'
            }),
            animate('0.1s ease-in',
                style({
                    transform: 'translateY(-50px)',
                    opacity: '0'
                }))
        ])
    ]);
