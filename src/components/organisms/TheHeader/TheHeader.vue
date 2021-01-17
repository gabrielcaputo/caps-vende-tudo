<template>
    <header class="TheHeader" :class="`TheHeader--${theme}`">
        <div class="TheHeader__Container">
            <Icon class="goBack" :color="theme" name="chevron-left" @click="$router.push('/')"/>
            <strong @click="$router.push('/')">
                <img :src="caps" alt="">
                Caps Vende Tudo!
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
        caps() {
            return require(`@/assets/images/caps.jpg`)
        },
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
    z-index: 1;
    transition: all 0.3s ease;

    @media screen and (max-width: 767px) {
        padding: 24px 0;
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
        @media screen and (min-width: 767px) {
            padding: 16px 0;
        }

        .TheHeader__Container .goBack {
            @media screen and (max-width: 767px) {
                height: 24px;
                display: inline-block;
            }
        }
        .TheHeader__Container strong {
            font-size: 24px;
            img {
                height: 48px;
            }
            @media screen and (max-width: 767px) {
                transition: none;
                text-align: left;
                font-size: 0;
                img {
                    transition: none;
                    height: 0;
                }
            }
        }
        
    }

    &__Container {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .goBack {
            height: 0;
        }

        strong {
            font-size: 10px;
            margin: 0;
            padding: 0;
            line-height: 100%;
            font-size: 32px;
            padding: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
            width: 100%;
            display: flex;
            align-items: center;
            gap: 16px;

            img {
                display: block;
                height: 64px;
                border-radius: 50%;
                transition: all 0.3s ease;
            }
            @media screen and (max-width: 767px) {
                text-align: center;
                flex-direction: column;
            }

            
        }

        
    }
}
</style>