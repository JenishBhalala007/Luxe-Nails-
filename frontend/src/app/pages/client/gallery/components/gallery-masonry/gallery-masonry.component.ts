import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-gallery-masonry',
    standalone: true,
    imports: [CommonModule, RouterLink],
    template: `
    <section class="flex-1 px-4 md:px-10 py-8 flex justify-center">
        <div class="max-w-[1200px] w-full mx-auto">
            <!-- CSS Grid Layout -->
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Data-driven approach would be better here but keeping hardcoded to match HTML structure exactly for now -->
                
                <!-- Item 1: Bridal Tall -->
                <div [routerLink]="['/client/gallery', '1']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Elegant bridal nail art with white lace details" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGqxZJKdwBfIE5szL_-aVopb-3BO-HebkHJS9oU_n7l1JTTJXxmrm-UpaTgpWMBUJveNKyNT24Hu0lSKMClAhL99KJXOFy5cS5Cp8KIAsxF4F0MDCgLRVApdDxk_ksZEqVSBUHzuZUw4kJU4RNRE9Oux-DLwFpL4UumZqbnXyGDMODPct7BWqBFGsl7ms8NTd_QKIsYOk8OBBKHuXlpJoNrYj81nXKflb-Aot9F0Hgidzm_q5tzJMqjMcY9GF9qiWyiYdHqPqMKxVD"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Bridal Lace</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Sarah J.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">245</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <!-- Item 2: Abstract Short -->
                <div [routerLink]="['/client/gallery', '2']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Abstract colorful swirls nail art design" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgqG-iD6goPv3jYYwP5fyhtoCe0KRY2t6g8zTgddBrHJNBtHcRoLc_7CT_j3Jq3e32ENVyxOAZfgNvX8A8a0ooHGBwe_JiY-hg2fU0hf49FyV0-Bx1mpKVslXUU-fBS5gEI_57EcqTXER_fe472376wXjJ4RtFROtWjdwdbfPIri83ndBf69Udtr1TM9OX0IOKkvT9g4Im6ovbkdtaScMCjbUIV8UugLM7PyjPz8KHnjJtkbojxQMH7WFDa0g1oTNISSXQB7t3_bZD"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Color Swirls</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Mike T.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">189</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 3: Pastel Medium -->
                <div [routerLink]="['/client/gallery', '3']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Soft pastel pink manicure holding a flower" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2z0vYTN3ThDtJRfKTm82FrD8gHDTbmbWY497pBsFzAqmQUDRIOKwSsjCGQ1yoL315gDRu6Qh9mCgB-XaMxHpDI69DuGQGcxq-qDZuSZ3VDMGzdWpnXRQBb3lZLXkicWnXJA08ABX86ce52oVHAmf3a8GLAefpepBONH_Mvd0TTmE26bpfVEPfygMa6wgn7BYUdYy8CYZhYR1BDFCnIum7ufjxprr5ERBnDwcbViZINOFm-jPxr2ItO7_ECYBxLNIBpNfmb0WCo8M3"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Rose Quartz</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Elena R.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">342</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 4: Minimalist Tall -->
                <div [routerLink]="['/client/gallery', '4']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Minimalist nude nails with gold accent lines" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFqbsEn4Q128gko-jaPSYpCJqrHmStlX49RVd5o0VRzhBKkWS_X-kTbnIlFP4YfrngL_Zd9bdaWb7ZTJT5OOkaZgQm2CHEneXFd5ahDPNpo2HLMD4lQ-D8_-D1UVKjl7u4ZQRIa6a5igHpY7qe2r51dgrucqiqz9SMoQFZAH6ga6Td8e7Bzojp7AnvcAJleg7JxX26LsnyrjdLh3td-SPjIum-WvjEU0S6pr3HEZ-T6Sf_AVr9t-i7aMv8QawDt1i8iY0JouwoENRV"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Golden Touch</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Jessica W.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">512</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 5: Neon -->
                <div [routerLink]="['/client/gallery', '5']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Bright neon green nails against dark background" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBTb7IuqjA5A5ldgn2wHsoNLQq97M5g4SO59tQ7fC5JESst2RJAI0r_RU8-OQ0GkmE4ysb6ULEE2NuFcJirddznCTqUusUH3wNb01VTNE9OgoB-AKQHZWtKfOK0JwFklWSxN2P9gtFOihaoLwRJpod8NHdAP-_ZP2aKAqmLU4s3TXjqY65gflSaUDf9DHwz16XSwAFyJw9TN-XSs0w0lbt4Iauadr3ChzjmIuO7Ilu55Lc2w7MSRryXv0z5OIrY8kgn9WoTEiV6RV7o"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Neon Nights</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Alex K.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">156</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 6: Bridal Detail -->
                <div [routerLink]="['/client/gallery', '6']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Close up of french manicure with diamond ring" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWGacq-lPBRHV-fU4A-1fu9n-7raa00xRt2iiHuHTcGB_NI4ZRzcMFmfq-O_nWOfIuPwOGFPm5kV1ZH2yVpgZD4dNxJqfAO10hfXPEzQ0nJVkU9cuOWXAKAo5D_AV_Cp3KYGWVBTmTX3bqMQQ-9LSwg2O0bwCF7hMNVSWrVQ7W9ULAoQIpI_FEPPKj1s1a445vmkVYfoYccVwUPbuuoclFj_l339EXSv-mAK81rj05hJq4e7KvScQCGYLRTCoAju3GBvvByMULoDHo"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Classic French</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Sarah J.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">892</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 7: Art -->
                <div [routerLink]="['/client/gallery', '7']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Artistic nails with blue geometric patterns" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQSQKAeN66_uP8a42jna6nVEhdAaeRrn0pJ9IB1defwVPrp8GPAIB96MOkyE5Wtbjg1CPHv96Vt01WYz6Q0ksQ4F0UTEQgxF4IrFQ587Z8TyHMsHbjOq2TceNPTQZ98uXKYBhxg4k1urTuJ56O-XXrV8GsaRDyHCFIkvPflgXu03Rircvf6psEq9FD5rbU82ZeFfVZTrqkOgxVCwLT9gF16SkUIblBdp1VGYKmp4JCHw5klbfnSRxCXa5ICf5Sq-yIJr1fR31ncG6x"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Geometric Blue</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Mike T.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">113</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 8: Dark Mood -->
                <div [routerLink]="['/client/gallery', '8']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Dark red wine colored nails matte finish" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnhKRJyH2A5sXd70MGlfS0JoGVmuqWYlZbVB0HeOjkqhx4jGDfEmzeaDOYhTdlZfbLyjB0fJdBDMFMfvxhJgpmbyaTfc9f4_r3xq_Hgz0bDD50r_GabG2CA6T0EBu3GgelvRFRDwHFFd31FJTnqbGclOB-gfzEtgU3_JIQxWgp2kuxqKVGB2jEl4uga6yKvZYqkEzEkiwzR5F3cmvcaXHAHDOT08RN9Gi_uQm6Fo7gHDreSAGnHiBHbRsvJwLxlo8iK-W-Qp9G-vrx"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Midnight Matte</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Elena R.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">421</span>
                            </button>
                        </div>
                    </div>
                </div>

                <!-- Item 9: Glitter -->
                <div [routerLink]="['/client/gallery', '9']" class="relative group rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-shadow duration-300">
                    <img alt="Silver glitter nails sparkling in light" class="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLentUdEMVUiNUEB6Iq4mKOeszBI_qaCSTJg__YU-WT6efsHxK2a5pq_ZG2oW_8ID7OpnY0rmKvNVufYuOYA4U3rR4x1rEkVtRgsq_19SVXW35BR6Bh1dzuPUsCvzQAf804eXLAkyf1EBcXigg8pzNIacPC6iJMBCksMuqL6P-P1ypYBQ4byYUGM7Xb0PAuIJp7aOK75k69Lu2fg2vuaVQ5ckL-Qcm7iMGnESCTiO_KOUQO1uj1dU63B2Il_qPiCpTRhy6jFe3fxyN"/>
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                        <div class="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            <p class="text-white font-bold text-lg mb-1">Stardust</p>
                            <p class="text-white/80 text-xs uppercase tracking-wider font-semibold mb-3">By Jessica W.</p>
                            <button class="flex items-center gap-2 text-white/90 hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-lg fill-current">favorite</span>
                                <span class="text-xs font-bold">672</span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
            
            <!-- Load More Section -->
            <section class="py-12 px-4 flex justify-center">
                <button class="flex min-w-[200px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-8 border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-300 gap-3 group">
                    <span class="material-symbols-outlined text-2xl group-hover:animate-bounce">keyboard_arrow_down</span>
                    <span class="text-base font-bold tracking-wide">Load More Designs</span>
                </button>
            </section>
        </div>
    </section>
  `
})
export class GalleryMasonryComponent { }
