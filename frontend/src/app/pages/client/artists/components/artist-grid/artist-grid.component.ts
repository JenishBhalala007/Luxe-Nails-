import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArtistCardComponent } from '../artist-card/artist-card.component';
import { ArtistFilterComponent } from '../artist-filter/artist-filter.component';

@Component({
    selector: 'app-artist-grid',
    standalone: true,
    imports: [CommonModule, ArtistCardComponent, ArtistFilterComponent],
    template: `
    <div class="w-full max-w-[1200px] mx-auto">
        <app-artist-filter></app-artist-filter>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 pt-4">
            <app-artist-card 
                name="Sarah Jenkins"
                specialty="3D Art Expert"
                [rating]="4.9"
                [reviews]="124"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuBOlWd56ygGYqwHJ8wwRKgLWYxbNacgFxlwexlQeH6aHJahus7KU2BDquYgP1bzM2Z-S8b5FbUl5LKCIBy4qOkMekljigo4t32X5segIk-uoZ7AIHaji1-LG1ojbEgi1hIeySjnRDuvcN33GJAMPlnVXcYhg2yzC5Q9Xqc8jPG_g7Y0ne3FDOg7n1GJZFmGvz-X1Q7blgv_EA_u0fk_lok4BKXqvPQQy4mGjpIjl2QB9JaqINSNiMdWhgpirynvEt3aEbC9Y0PZi_NG"
                badgeIcon="verified">
            </app-artist-card>

            <app-artist-card 
                name="Mia Wong"
                specialty="French Tips"
                [rating]="5.0"
                [reviews]="98"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuA5ny_9xK7q33aFTnwmWEBpxFlyeq3XtR7ss1WFgQprLoeIld34HJKs8hBlrF2e_wZ95-8Lk9lSEMPlojmOQoFo2T7Fgzx1S0rTLYVB7HYWpEgrQXgfNNMI23k4d9VfRg7xWA3JQcXIyHBEgOEdizF2HUc0ggFQGHotyoRhGqSMOi7pegwMIQHizDWaSGzVSSZfKWfoAE-pLZyCG6nSiCPm9jsIO2Rso6i-IsOG3NcBPWZz4kYcKd0OJ9_jvpf3v4esAj7rtwt496gN">
            </app-artist-card>

            <app-artist-card 
                name="Elena Rodriquez"
                specialty="Gel Structure"
                [rating]="4.8"
                [reviews]="210"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDQK1hcCRkw1CoUETTyvaf08ZQ8eYNO_F1lmlQjhKhjbHH70qgFEMGHAavpXzG7lmNgaqRYH87U582TBexQwC3Uq0tL6HtqkClsSVR5snf4trR_0E9Kjtkibh191o9DWXjd4ymDCWmJ04AwvjBYnA06qwvxdDoydwQS5TKFAMbtv8TjszgGWU6vgOjdIafWirBTHr4r4ufgQh31qCoycmrTucZqUgGceiWprCFpiPm58ZJ3w6E56h-wwP0UveZfbWEOJ-GE4U9CaaLH">
            </app-artist-card>

            <app-artist-card 
                name="Chloe Kim"
                specialty="Hand-Painted"
                [rating]="4.9"
                [reviews]="86"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDrGkWLt8pUkn1gFv5zImUKvi7jBz81rEBhneGYz5NJv7JqStGwD4L-gkRPqHCmgRBp9V9k2BFA805Jj8S-Qsc6-rf-E90LSZw6LJ3Emnx9S_QFZvWCIT4YepIr6C42Ep_QLvaEAHQzpA9RDioZkE0LdPFrfsCa4hrGNYbTJBICxacrr0pdUR4-AN_lhfWuni0NJRHHENLLSvvowiZy1JsHcabETdwZSVToNCHBd9VB5BFGWFYeSH3nIE109M6nnSXU6ICvPhpONmyf"
                badgeIcon="palette">
            </app-artist-card>

            <app-artist-card 
                name="Marcus Johnson"
                specialty="Abstract Art"
                [rating]="4.7"
                [reviews]="45"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuAJ2qFdhyzobl_CgsKPrdeypDXHQl9Yogn3Fpv8ZnUBxQ3bpYz-shWd55_2f3hEGhgKOfm-iE3GwcX03PKZgyBmF_ORKn1cy7jlf9QJUgB1QKt7c_ryI-rFQYvqzgVM8VYYjo2PwzvqptgWLo7rgB4f9Sw7-AUlxsBF2zoDZkhRNzexRGBk7psMxYejCCC15EGHhmEUlgsVi3Ur5uaqCg2AlgIO5CNzAnUYuMuU3r0ExBup5xWDS2QsygwqyxwQhhX_bHO1RjzSz4j4">
            </app-artist-card>

             <app-artist-card 
                name="Aisha Williams"
                specialty="Gem & Crystal"
                [rating]="5.0"
                [reviews]="15"
                image="https://lh3.googleusercontent.com/aida-public/AB6AXuDBZoORNmlA9jlFS8t5Ardb_LspVOPO35C-VOOqBlUN7KREsnBMr3JTh0_W5uTkF1C27H9Yrhg8RadxciwLo5g2SxkNAV3aCvodwvw4IoXBQfCUPGOzMG4xEMqxxEpD03JQp5u13TzsQFtUnRrlRpOQE7QGVUsgFizltVRWqC1f2ZgwsKFPz89tjYszZw20chUtHkJj7NkUF7moRJ1TVARIf3itgrbe3SjJZxBqsuM70kRs0ldwSfPwFsStvjMzXmnRJg3VJRwjRt85"
                badgeIcon="diamond">
            </app-artist-card>
        </div>
    </div>
  `
})
export class ArtistGridComponent { }
