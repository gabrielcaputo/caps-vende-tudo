<template>
    <div class="SocialMarketplaces" :class="`SocialMarketplaces--${theme}`">
        <ul>
            <li>
                <a href="https://www.mercadolivre.com.br/caputomateus" target="_blank">
                    <Icon class="icon" :color="theme" name="mercadolivre" v-tooltip="'Abrir anúncios no Mercado Livre'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="olx" v-tooltip="'Abrir anúncios no OLX'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="semexe" v-tooltip="'Abrir anúncios no semexe'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="facebook" v-tooltip="'Abrir anúncios no Facebook Marketplace'"/>
                </a>
            </li>
            <li>
                <a href="https://instagram.com/caputomateus" target="_blank">
                    <Icon class="icon" :color="theme" name="instagram" v-tooltip="'Abrir perfil no Instagram'"/>
                </a>
            </li>
            <li>
                <a href="https://m.me/caputomateus" target="_blank">
                    <Icon class="icon" :color="theme" name="messenger" v-tooltip="'Enviar Messenger'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="whatsapp" v-tooltip="'Enviar WhatsApp'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="phone" v-tooltip="'Ligar (+55 11 960 667 581)'"/>
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="email" v-tooltip="'Enviar email (caputomateus@gmail.com)'"/>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
import { Icon } from '@/components/photons'
export default {
    name: 'SocialMarketplaces',
    components: {
        Icon
    },
    props: {
        theme: {
            type: String,
            default: 'dark'
        },
    },
}
</script>

<style lang="scss" scoped>
.SocialMarketplaces {
    ul {
        display: flex;
        gap: 12px;
        margin: 0;
        padding: 0;
        transition: all 0.3s ease;
        li {
            display: block;
            height: 24px;
            position: relative;
            transition: all 0.3s ease;
        }
    }
    &--light {
        ul {
            gap: 8px;

            li {
                height: 16px;
            }
        }
    }
}

</style>