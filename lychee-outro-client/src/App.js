import AttentionIcon from "./components/Attention";
import "./App.css";
import Sidebar from "./components/Sidebar";
import CustomDropdown from "./components/CustomDropdown";
import { useCallback, useState } from "react";
import axios from "axios";

function App() {
  const [selectedAction, setSelectedAction] = useState("");
  const [customText, setCustomText] = useState("");
  const [brandKitName, setBrandKitName] = useState("");

  const limit = 20;

  const setFormattedContent = useCallback(
    (text) => {
      setCustomText(text.slice(0, limit));
      setSelectedAction("");
    },
    [limit, setCustomText]
  );

  const handleDropdownChange = (action) => {
    setSelectedAction(action);
    setCustomText("");
  };

  const handleSubmit = async () => {
    if (!brandKitName) return alert("Brand kit name cannot be empty");
    console.log(selectedAction, customText);
    if (!selectedAction && !customText) return alert("Call to action cannot be empty");

    axios
      .post("http://localhost:3001/create-outro", {
        brandKitName,
        action: selectedAction || customText,
      })
      .then((res) => {
        alert(res.data.message);
        setCustomText("");
        setSelectedAction("");
        setBrandKitName("");
      })
      .catch((err) => console.log("Error:", err));
  };

  return (
    <>
      <div className="mx-auto w-9/12 py-[50px]">
        <div className="flex gap-10 items-center">
          <p className="text-2xl font-semibold">Brand kit name</p>
          <input placeholder="Enter brand kit name" value={brandKitName} onChange={(event) => setBrandKitName(event.target.value)} className="border-gray-300 border-[1px] rounded-lg p-[6px] pl-[10px] w-[270px] outline-none active:border-[#2237FF] focus:border-[#2237FF]" />
        </div>
        <div className="flex pt-[40px]">
          <div className="flex-shrink-0 flex-grow-0 basis-[250px]">
            <Sidebar />
          </div>

          <div className="w-full">
            <div className="flex items-center gap-2">
              <p className="font-semibold text-[30px]">Outro</p>
              <AttentionIcon tooltip={"We will show the call to action at the end of the clip"} />
            </div>

            <div className="flex justify-between items-center">
              <p>Call to action</p>
              <CustomDropdown selectedAction={selectedAction} setSelectedAction={handleDropdownChange} />
            </div>

            <hr className="my-9"></hr>

            <div className="flex justify-between">
              <p>Custom call to action</p>{" "}
              <div className="flex-col flex">
                <textarea placeholder="Write a custom call to action" className="w-[400px] p-[4px] text-sm border-[1px] border-gray-300 outline-none rounded-md" rows={5} onChange={(event) => setFormattedContent(event.target.value)} value={customText} />
                <p className="text-xs text-gray-600 flex justify-end">
                  {customText?.length}/{limit}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-16 mb-5"></hr>
        <button onClick={handleSubmit} className="bg-[#2237FF] hover:bg-[#2237FF] text-white text-sm px-[22px] py-[5px] rounded-md">
          Save
        </button>
      </div>
    </>
  );
}

export default App;
