const features = document.querySelector('#features');
const featuresContent = features.querySelectorAll('.features_content');
const fArrow = features.querySelectorAll('.f-arrow');
const company = document.querySelector('#company');
const companyContent = company.querySelectorAll('.company_content');
const cArrow = company.querySelectorAll('.f-arrow');
const overlay = document.querySelector('.overlay');

const btnHamburger = document.querySelector('#btnHamburger');
const header = document.querySelector('.header');
const sideHidden = header.querySelectorAll('.side-hidden');

const sideFeature = document.querySelector('.side_feature');
const sideFeatureMenu = sideFeature.querySelectorAll('.side_nav_features_cont');
const sideCompany = document.querySelector('.side_company');
const sideCompanyMenu = sideCompany.querySelectorAll('.side_nav_company_cont');

const sideFArrow = sideFeature.querySelectorAll('.f-arrow');
const sideCArrow = sideCompany.querySelectorAll('.f-arrow');

features.addEventListener('click', () => {
    if (features.classList.contains('features_menu')) {
        featuresContent.forEach((element) => {
            if (element.classList.contains('hide-menu')) {
                element.classList.remove('hide-menu');
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.add('fade-out');
                element.classList.add('hide-menu');
                element.classList.remove('fade-in');

            }
        });

        fArrow.forEach((element) => {
            if (element.classList.contains('hide-menu')) {
                element.classList.remove('hide-menu');
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.add('hide-menu');
                element.classList.add('fade-out');
                element.classList.remove('fade-in');
            }
        })
    }

})


company.addEventListener('click', () => {
    if (company.classList.contains('company_menu')) {
        companyContent.forEach((element) => {
            if (element.classList.contains('hide-menu')) {
                element.classList.remove('hide-menu');
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.add('fade-out');
                element.classList.add('hide-menu');
                element.classList.remove('fade-in');

            }
        });

        cArrow.forEach((element) => {
            if (element.classList.contains('hide-menu')) {
                element.classList.remove('hide-menu');
                element.classList.add('fade-in');
                element.classList.remove('fade-out');
            } else {
                element.classList.add('hide-menu');
                element.classList.add('fade-out');
                element.classList.remove('fade-in');
            }
        })
    }

})

btnHamburger.addEventListener('click', () => {
    console.log('Yey');

    if (header.classList.contains('open-menu')) {
        header.classList.remove('open-menu');
        sideHidden.forEach(function (element) {
            if (!element.classList.contains('side-hidden')) {
                element.classList.add('side-fade-out');
                element.classList.add('side-hidden');
                element.classList.remove('side-fade-in');

            }

        })


    } else {
        header.classList.add('open-menu');
        sideHidden.forEach((element) => {
            if (element.classList.contains('side-hidden')) {
                element.classList.remove('side-hidden');
                element.classList.remove('side-fade-out');
                element.classList.add('side-fade-in');
            }
        })

    }


})

sideFeature.addEventListener('click', () => {
    sideFeatureMenu.forEach((element)=>{
        if (element.classList.contains('d-none')){
            element.classList.remove('d-none');
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            element.classList.add('d-none');
        }
    })

    sideFArrow.forEach((element) => {
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none');
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.add('d-none');
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }
    })
})

sideCompany.addEventListener('click', () => {
    sideCompanyMenu.forEach((element)=>{
        if (element.classList.contains('d-none')){
            element.classList.remove('d-none');
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        } else {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
            element.classList.add('d-none');
        }
    })

    sideCArrow.forEach((element) => {
        if (element.classList.contains('d-none')) {
            element.classList.remove('d-none');
            element.classList.add('fade-in');
            element.classList.remove('fade-out');
        } else {
            element.classList.add('d-none');
            element.classList.add('fade-out');
            element.classList.remove('fade-in');
        }
    })
})