import Transcript from "../utils/transcript";
import Card from "../components/card";

const fetchDollarValues = async () => {
  const res = await fetch("http://localhost:3000/api/dollar");

  return res.json();
};

const DollarPage = async () => {
  const dollarValues = await fetchDollarValues();

  return (
    // <div className="flex flex-wrap gap-4">{JSON.stringify(dollarValues)}</div>
    <div className="flex justify-center flex-wrap gap-4 p-6">
      {Object.keys(dollarValues).map((key) => (
        <Card key={key}>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-emerald-600 mb-2">
              {Transcript.es[key]}
            </span>
            {/* Buy */}
            <div className="text-lg text-gray-500">
              <span>{`${dollarValues[key].buy.text} - `}</span>
              <span className="font-bold">{dollarValues[key].buy.value}</span>
            </div>
            {/* Sell */}
            <div className="text-lg text-gray-500">
              <span>{`${dollarValues[key].sell.text} - `}</span>
              <span className="font-bold ">{dollarValues[key].sell.value}</span>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default DollarPage;
