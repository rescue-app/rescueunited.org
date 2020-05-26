<template>
    <div>
        <SmallHero />
        <div class="container mt-4">
            <div class="section-content">
                <div class="row g-gs justify-content-between">
                    <div class="col">
                        <div class="text-block">
                            <h5 class="subtitle">COOKIE POLICY</h5>
                            <p>RescueUnited reports on the use of cookies on its website: rescueunited.org</p>
                            <h6>What are cookies?</h6>
                            <p>Cookies are files that can be downloaded to your computer through websites. They are tools that play an essential role in the provision of many information society services. Among other things, they allow a website to store and retrieve information about the browsing habits of a user or his/her computer and, depending on the information obtained, they can be used to recognise the user and improve the service offered.</p>
                            <h6>Types of cookies</h6>
                            <p>
                                Depending on the entity that manages the domain from which the cookies are sent and processes the data obtained, two types can be distinguished:
                                <ul>
                                    <li>Own cookies: those that are sent to the user's terminal equipment from a computer or domain managed by the publisher itself and from which the service requested by the user is provided.</li>
                                    <li>Third-party cookies: those that are sent to the user's terminal equipment from a computer or domain that is not managed by the publisher, but by another entity that processes the data obtained through cookies.</li>
                                </ul>
                            </p>
                            <p>In the case that cookies are installed from a computer or domain managed by the publisher itself but the information collected through them is managed by a third party, they cannot be considered as own cookies.</p>
                            <p>
                                There is also a second classification according to the length of time they remain stored in the customer's browser, which may be:
                                <ul>
                                    <li>Session cookies: designed to collect and store data while the user accesses a website. They are usually used to store information that is only relevant to the provision of the service requested by the user on one occasion (e.g. a list of products purchased).</li>
                                    Persistent cookies: the data is still stored on the terminal and can be accessed and processed for a period defined by the person responsible for the cookie, which can range from a few minutes to several years. Finally, there is another classification with five types of cookies according to the purpose for which the data obtained is processed:
                                    <ul>
                                        <li>Technical cookies: those that allow the user to navigate through a web page, platform or application and use the different options or services that exist therein, such as, for example, controlling traffic and data communication, identifying the session, accessing restricted access areas, remembering the elements that make up an order, carrying out the purchase process of an order, applying for registration or participation in an event, using security elements during navigation, storing content for the broadcasting of videos or sound or sharing content through social networks.</li>
                                        <li>Personalization cookies: allow the user to access the service with some general characteristics predefined according to a series of criteria in the user's terminal, such as language, the type of browser used to access the service, the regional configuration from which the user accesses the service, etc.</li>
                                        <li>Analysis cookies: they allow the person responsible for them to monitor and analyse the behaviour of the users of the websites to which they are linked. The information collected by means of this type of cookie is used to measure the activity of the websites, applications or platforms for the elaboration of navigation profiles of the users of these sites, applications and platforms, with the aim of introducing improvements based on the analysis of the use data made by the users of the service.</li>
                                        <li>Advertising cookies: they allow the management, in the most efficient way possible, of advertising spaces.</li>
                                        <li>Behavioral advertising cookies: store information on user behavior obtained through continuous observation of their browsing habits, which allows the development of a specific profile to display advertising based on it,</li>
                                        <li>Cookies from external social networks: these are used to allow visitors to interact with the content of different social platforms (facebook, youtube, twitter, linkedin, etc...) and are generated only for users of these social networks. The conditions of use of these cookies and the information collected is regulated by the privacy policy of the corresponding social platform.</li>
                                    </ul>
                                </ul>
                            </p>
                            <h6>Disabling and Deleting Cookies</h6>
                            <p>You have the option to allow, block or delete cookies installed on your computer by setting the options of the browser installed on your computer. By disabling cookies, some of the services available may no longer be operational. The way to disable cookies is different for each browser, but it can usually be done from the Tools or Options menu. You can also consult the browser's Help menu where you can find instructions. You can choose which cookies you want to work on this website at any time.</p>
                            <p>
                                You can allow, block or delete the cookies installed on your computer by configuring the options of the browser installed on your computer:
                                <ul>
                                    <li>Microsoft Internet Explorer o Microsoft Edge: http://windows.microsoft.com/es-es/windows-vista/Block-or-allow-cookies</li>
                                    <li>Mozilla Firefox: http://support.mozilla.org/es/kb/impedir-que-los-sitios-web-guarden-sus-preferencia</li>
                                    <li>Chrome: https://support.google.com/accounts/answer/61416?hl=es</li>
                                    <li>Safari: http://safari.helpmax.net/es/privacidad-y-seguridad/como-gestionar-las-cookies/</li>
                                    <li>Opera: http://help.opera.com/Linux/10.60/es-ES/cookies.html</li>
                                </ul>
                            </p>
                            <p>
                                In addition, you can also manage the cookie store in your browser through tools such as the following:
                                <ul>
                                    <li>Ghostery: www.ghostery.com/</li>
                                    <li>Your online choices: www.youronlinechoices.com/es/</li>
                                </ul>
                            </p>
                            <h6>Acceptance of the Cookie Policy</h6>
                            <p>rescueunited.org assumes that you accept the use of cookies. However, it displays information about its Cookie Policy at the bottom or top of any page on the site with each login so that you are aware.</p>
                            <p>
                                In light of this information, the following actions may be taken:
                                <ul>
                                    <li>Accept cookies. This warning will not be displayed again when you access any page of the portal during this session.</li>
                                    <li>Close, the warning is hidden on this page.</li>
                                    <li>Modify your settings. You can learn more about what cookies are, read rescueunited.org's Cookie Policy, and modify your browser settings</li>
                                </ul>
                            </p>
                            <p>You can open the settings box by clicking <a href="javascript:void(0)" class="font-weight-bold cursor-icon" @click="openModal">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SmallHero from '@/components/smallHero'

export default {
    components: {
        SmallHero
    },
    methods: {
        openModal () {
            this.$cookies.modal = true
        }
    }

}
</script>
