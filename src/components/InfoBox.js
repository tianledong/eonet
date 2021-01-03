const InfoBox = ({ info, cleanInfo }) => {
  return (
    <div className="location-info">
      <button onClick={cleanInfo} className="btn">X</button>
      <h2>EONET Info</h2>
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>
        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
        <li>
          DATE: <strong>{info.date}</strong>
        </li>
      </ul>
    </div>
  );
};

export default InfoBox;
