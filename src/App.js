import "./App.css";
function App() {
  return (
    <>
      <div className="parent">
        <div className="cards">
          <div className="card">123</div>
          <div className="card">456</div>
          <div className="card">789</div>
          <div className="card">1122</div>
        </div>
        <div className="cards_v2">
          <div className="card_v2">123</div>
          <div className="card_v2">456</div>
          <div className="card_v2">789</div>
          <div className="card_v2 item">
            <span>1</span>
            <span>3</span>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="item-1 itemv">Item 1</div>
        <div className="item-2 itemv">
          Item 2 djksa hdkaj dhakjhdjk ahdakjdh akjdhashsaj djksa hdkaj
          dhakjhdjk ahdakjdh akjdhashsaj
        </div>
        <div className="item-3 itemv">Item 3</div>
        <div className="item-4 itemv">Item 4</div>
        <div className="item-5 itemv">Item 5</div>
      </div>
      <div className="containerv2">
        <div className="item-1v2 itemvv2">header</div>
        <div className="item-2v2 itemvv2">sidebar</div>
        <div className="item-3v2 itemvv2">content</div>
        <div className="item-4v2 itemvv2">comment</div>
        <div className="item-5v2 itemvv2">footer</div>
      </div>
    </>
  );
}

export default App;
