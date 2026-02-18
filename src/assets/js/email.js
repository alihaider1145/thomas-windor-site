// Sends artist notification email when a painting is sold

(function() {
  'use strict';

  const EMAILJS_CONFIG = {
    publicKey: 'fTsIU3-i9iJAsJ5u_',       
    serviceId: 'service_xdhv8tn',       
    templateId: 'template_1xyycpg',     
  };

  emailjs.init(EMAILJS_CONFIG.publicKey);

  const urlParams = new URLSearchParams(window.location.search);
  const sessionId = urlParams.get('session_id');

  if (!sessionId) {
    console.log('No Stripe session ID found - skipping artist notification');
    return;
  }

  const now = new Date();
  const saleTime = now.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZoneName: 'short'
  });

  const emailParams = {
    email: window.ARTIST_EMAIL,               
    painting_title: 'Unknown Painting',       
    price: 'See Stripe',                  
    buyer_email: 'See Stripe Dashboard',  
    sale_time: saleTime,                     
    session_id: sessionId,                
  };

  console.log('Sending artist notification email...', emailParams);

  emailjs.send(
    EMAILJS_CONFIG.serviceId,
    EMAILJS_CONFIG.templateId,
    emailParams
  )
  .then(function(response) {
    console.log('✅ Artist notification sent successfully', response.status, response.text);
  })
  .catch(function(error) {
    console.error('❌ Failed to send artist notification:', error);
  });

})();
