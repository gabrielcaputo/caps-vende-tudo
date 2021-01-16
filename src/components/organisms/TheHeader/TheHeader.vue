<template>
    <header class="TheHeader" :class="`TheHeader--${theme}`">
        <div class="TheHeader__Container">
            <strong @click="$router.push('/')">
                <Icon class="goBack" :color="theme" name="chevron-left" />
                <span>Caps Vende Tudo!</span>
            </strong>
            <SocialMarketplaces :theme="theme" class="socialMarketplaces" />
        </div>
    </header>
</template>

<script>
import { Icon } from '@/components/photons'
import { SocialMarketplaces } from '@/components/molecules'

export default {
    name: 'TheHeader',
    components: {
        Icon,
        SocialMarketplaces
    },
    computed: {
        theme() {
            return this.$route.meta.headerTheme ? this.$route.meta.headerTheme : 'dark'
        }
    }
}
</script>

<style lang="scss" scoped>
.TheHeader {
    position: relative;
    padding: 48px 0;
    z-index: $z-nav;
    transition: all 0.3s ease;

    @media screen and (max-width: 767px) {
        .socialMarketplaces {
            display: none;
        }
    }

    &--dark {
        color: #333;
    }

    &--light {
        color: #fff;
        @include gradient(180deg, rgba(#000, 0.8), transparent);
        padding: 16px 0;

        .TheHeader__Container strong {
            font-size: 24px;
            @media screen and (max-width: 767px) {
                .goBack {
                    height: 24px;
                    display: inline-block;
                }
                span {
                    font-size: 0;
                }
                font-size: 24px;
            }
        }
        
    }

    &__Container {
        display: flex;
        justify-content: space-between;
        align-items: center;


        strong {
            font-size: 10px;
            margin: 0;
            padding: 0;
            line-height: 100%;
            font-size: 32px;
            padding: 8px;
            cursor: pointer;
            transition: all 0.3s ease;

            .goBack {
                height: 0;
            }

            span {
                transition: all 0.3s ease;
                @media screen and (max-width: 767px) {
                    transition: none;
                }
            }
        }

        
    }
}
</style>