<template>
    <footer class="TheFooter">
        <div class="TheFooter__Container">
            <SocialMarketplaces class="socialMarketplaces" />
            <div class="info">Gabriel Caputo | São Paulo/SP</div>
        </div>
    </footer>
</template>

<script>
import { SocialMarketplaces } from '@/components/molecules'
export default {
    name: 'TheFooter',
    components: {
        SocialMarketplaces
    },
}
</script>

<style lang="scss" scoped>
.TheFooter {
    padding: 32px 0;
    &__Container {
        display: flex;
        gap: 24px;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        @media screen and (max-width: 767px) {
            flex-direction: column;
            gap: 8px;
        }     
    }
}

</style>
<style lang="scss">
.TheFooter {
    &__Container {
        .socialMarketplaces {
            ul {
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                @media screen and (max-width: 390px) {
                    width: 180px;            
                }
            }
        }
    }
}
</style>