<template>
  <div class="wrapper">
    <div class="container py-10 px-4">
      <div class="float-right" id="google_translate_element"></div>

      <h4>PRIVACY POLICY</h4>
      <p>
        This privacy policy has been compiled to better serve those who are
        concerned with how their information is being used online. Please read
        our privacy policy carefully to get a clear understanding of how we
        collect, use, protect or otherwise handle your information in accordance
        with our website.
      </p>

      <h4>What personal information do we collect from users that visit website?</h4>

      <p>
        When registering on our site, as appropriate, you will be asked to enter
        your email address or other details to aid in identifying your account.
      </p>

      <h4>When do we collect information?</h4>

      <p>
        We collect information from you when you register on our site or enter
        information on our site.
      </p>

      <h4>How do we use your information?</h4>

      <p>
        We may use the information we collect from you when you register, surf
        the website, or use certain other site features in the following ways:
      </p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - To allow us to better service you
        regarding features or in responding to your support requests.
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - To send periodic emails regarding your
        account or other services.
      </p>

      <h4>How do we protect visitor information?</h4>

      <p>
        Our website is scanned on a regular basis for security holes and known
        vulnerabilities in order to make your visit to our site as safe as
        possible. Information stored on the website is encrypted using various
        algorithms.
      </p>

      <p>
        We implement a variety of security measures when a user registers an
        account, submits, or accesses their information, uses features to
        maintain the safety of your personal information.
      </p>

      <p>
        All transactions are processed through a gateway provider and are not
        stored or processed on our servers.
      </p>

      <h4>Do we use 'cookies'?</h4>

      <p>
        Yes. Cookies are small files that a site or its service provider
        transfers to your computer's hard drive through your Web browser (if you
        allow) that enables the site's or service provider's systems to
        recognize your browser and capture and remember certain information. For
        instance, we use cookies to help us automatically remember you for your
        next visit. They are also used to help us understand your preferences
        based on previous or current site activity, which enables us to provide
        you with improved services. We also use cookies to help us compile
        aggregate data about site traffic and site interaction so that we can
        offer better site experiences and tools in the future.
      </p>

      <p>
        We use cookies to:
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Understand and save user's preferences
        for future visits.
      </p>

      <p>
        You can choose to have your computer warn you each time a cookie is
        being sent, or you can choose to turn off all cookies. You do this
        through your browser (like Internet Explorer) settings. Each browser is
        a little different, so look at your browser's Help menu to learn the
        correct way to modify your cookies.
      </p>

      <h4>If users disable cookies in their browser:</h4>

      <p>
        If you disable cookies, some features will be disabled. It will turn off
        some of the features that make your site experience more efficient and
        some of our services will not function properly.
      </p>

      <h4>Third Party Disclosure</h4>

      <p>
        We do not sell, trade, or otherwise transfer to outside parties your
        personally identifiable information.
      </p>

      <h4>Third party links</h4>

      <p>
        We do not include or offer third party products or services on our
        website.
      </p>

      <h4>According to CalOPPA we agree to the following:</h4>

      <p>Users can visit our site anonymously</p>

      <p>
        Once this privacy policy is created, we will add a link to it on our
        home page, or as a minimum on the first significant page after entering
        our website.
      </p>

      <p>
        Our Privacy Policy link includes the word 'Privacy', and can be easily
        be found on the page specified above.
      </p>

      <p>Users will be notified of any privacy policy changes:</p>

      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - On our Privacy Policy Page</p>

      <p>Users are able to review change their personal information:</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - By logging in to their account
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - By sending us a support ticket
      </p>

      <p>Users are able to request the removal of their information:</p>

      <p>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - By sending us an email
        <br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - By sending us a support ticket
      </p>

      <h4>How does our site handle do not track signals?</h4>

      <p>
        We honor do not track signals and do not track, plant cookies, or use
        advertising when a Do Not Track (DNT) browser mechanism is in place.
        Does our site allow third party behavioral tracking?
      </p>
      <p>We do not allow third party behavioral tracking</p>

      <h4>Contacting Us</h4>

      <p>
        If there are any questions regarding this privacy policy you may contact
        us using the information below.
      </p>

      <span id="contactemail">support@melissia-games.net</span>
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  name: "PrivacyPage",
  data() {
    return {};
  },
  mounted() {
    let translateScript = document.createElement("script");
    translateScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.head.appendChild(translateScript);
    this.googleTranslateInit();
  },
  methods: {
    googleTranslateInit() {
      let checkIfGoogleLoaded = setInterval(() => {
        if (window.google.translate.TranslateElement != null) {
          clearInterval(checkIfGoogleLoaded);

          this.googleTranslateElement("google_translate_element");
        }
      }, 100);
    },
    googleTranslateElement: function(id) {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
        },
        id
      );
    }
  }
};
</script>

<style scoped>
.wrapper {
  color: var(--font-color) !important;
}
</style>