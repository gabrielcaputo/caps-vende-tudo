<template>
    <footer class="SocialMarketplaces" :class="`SocialMarketplaces--${theme}`">
        <ul>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="mercadolivre" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="olx" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="semexe" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="instagram" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="facebook" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="messenger" />
                </a>
            </li>
            <li>
                <a href="" target="_blank">
                    <Icon class="icon" :color="theme" name="whatsapp" />
                </a>
            </li>
        </ul>
    </footer>
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