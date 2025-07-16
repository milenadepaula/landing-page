
const GoogleMapIframe = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.419354124939!2d-49.296419624974876!3d-25.47665677975711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce3f7a98ab81b%3A0xcad67a71b0450be7!2sAv.%20Rep.%20Argentina%2C%202403%20-%20%C3%81gua%20Verde%2C%20Curitiba%20-%20PR%2C%2080240-210!5e0!3m2!1spt-BR!2sbr!4v1719254003240!5m2!1spt-BR!2sbr"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default GoogleMapIframe;
