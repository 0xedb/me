const style = (
  <style jsx>{`
    div {
      color: white;
    }
  `}</style>
);
function MeSummary() {
  return (
    <div className="centered">
      <div>Bruno Edoh</div>
      <div>06: 10</div>
      {style}
    </div>
  );
}

export default MeSummary;
