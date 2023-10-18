



const Alerta = ({ tipo, mensaje }) => {
  return (
    <div className={`alerta alerta-${tipo}`}>
      <p>{mensaje}</p>
    </div>
  );
};

export default Alerta;  