
const GoogleMapIframe = () => {
  return (
    <div className="w-full h-64 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.572896279759!2d-49.2764337!3d-25.4525389!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce48782ceef2f%3A0xa988205ac75d924d!2sR.%20Cel.%20Dulc%C3%ADdio%2C%202281%20-%20%C3%81gua%20Verde%2C%20Curitiba%20-%20PR%2C%2080250-100!5e0!3m2!1spt-BR!2sbr!4v1772539922555!5m2!1spt-BR!2sbr"
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
