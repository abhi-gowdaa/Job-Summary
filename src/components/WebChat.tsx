import { Card } from "antd";
import { Input, Space } from "antd";
import { FormEvent, useState } from "react";
import axios from "axios";

const WebChat = () => {
  
        const [question, setInput] = useState<string>("");
        const [data, setResult] = useState<string>("");
        const [isTrue,setTrue]=useState(false)
 
        const handleSubmit = async (e:FormEvent) => {
            e.preventDefault(); 
            setTrue(true)
             setResult("Loading...")
            try {
                const response = await axios.post(`https://devin-ai-table.hf.space/webqa?question=${question}`);
                setTrue(false)
                setResult(response.data);
            } catch (error) {
                console.error('Error sending question:', error);
            }
        };
 
  

  return (
    <Card
      title="Ask your question"
      style={{
        width: 400,
        height: 350,
        backgroundColor: "rgba(1,225,253,0.1)",
      }}
    >
      <form onSubmit={(e) => handleSubmit(e)}>
        <Space.Compact style={{ width: "100%", display: "flex" }}>
          <Input
           required
            value={question}
            placeholder="enter here.."
            type="text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button disabled={isTrue} type="submit">Submit</button>
        </Space.Compact>
      </form>

      <Card
        size="small"
        style={{
          height: 200,
          marginTop: 10,
          padding: 10,
          overflowY:"auto"
        }}
      >
        <p style={{ margin: 0, wordWrap: "break-word" }}>{data}</p>
      </Card>
    </Card>
  );
};

export default WebChat;
