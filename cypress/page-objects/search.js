module.exports = {
    elements: {
        headerMenu: {
            toRent: '[data-testid=header-primarynav-mn-rent] > [data-testid=header-primarynav-accordion] > [data-testid=header-primarynav-link]',
            toRentTravelTime: '[data-testid=header-mobile-menu] > nav > ul > li:nth-child(3) > div:nth-child(2) > ul:nth-child(2) > li:nth-child(1) > a:nth-child(1)',
            housePrices: '[data-testid=header-primarynav-mn-prices] > [data-testid=header-primarynav-accordion] > [data-testid=header-primarynav-link]',
            signIn: '.css-1oboy4t-LogoWrapper > .css-mein0i-ProfileMenuWrapper > [data-testid=header-profile] > [data-is-logged-in="false"] > [data-testid=header-profile-sign-in]', 
            alertandSearch: '[data-testid=header-profilemenu-alerts-searches]',
        },
        sModal: {
            location: '#search-input-location',
            firstResult: 'li.ui-menu-item:nth-child(1)',
            minPrice: '#rent_price_min_per_month',
            maxPrice: '#rent_price_max_per_month',
            bedrooms: '#beds_min',
            searchSubmit: '#search-submit',
            duration: '#duration',
            transport: '#transport_type',
            manage:'.ed4gf0w1',
            return:'.ed4gf0w3',
        },
        searchResultsText: '.h-header',
        saveSearch: '[data-testid=save-search-button]',
        login: '[data-testid=header-profile-sign-in]',
        searchResultCount: '[data-testid=total-results]',
        acceptCookie: '.ui-cookie-consent-choose__buttons > .ui-button-primary',
        alertFrequency: '.js-myaccount-alert-frequency',
        searchResult: '#ui-id-4',
        tab_to_rent: '#tab-residential-to-rent > div:nth-child(2) > form > div:nth-child(5) > div > a:nth-child(1)', 
    }
} 
