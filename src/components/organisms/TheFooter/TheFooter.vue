<template>
    <footer class="TheFooter">
        <div class="TheFooter__Container">
            <SocialMarketplaces class="socialMarketplaces" />
            <div class="info">
                <span>Gabriel Caputo</span> | <span>São Paulo/SP</span>
            </div>
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
        
        .info {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 12px;
            @media screen and (max-width: 767px) {
                gap: 8px;
            }

            a {
                color: #000;
            }
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
                @media screen and (max-width: 374px) {
                    width: 180px;            
                }
            }
        }
    }
}
</style>