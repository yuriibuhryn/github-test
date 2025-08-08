import { useState } from 'react';
import './Chat.css';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [files, setFiles] = useState([]);

  const handleSend = () => {
    if (!input.trim() && files.length === 0) return;

    const newMessage = {
      id: Date.now(),
      sender: 'user',
      text: input,
      attachments: files,
    };

    setMessages(prev => [...prev, newMessage]);
    setInput('');
    setFiles([]);

    // mocked response
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        {
          id: Date.now(),
          sender: 'bot',
          text: 'This is a mocked response.',
          attachments: [],
        },
      ]);
    }, 500);
  };

  const handleFileChange = e => {
    const selected = Array.from(e.target.files).map(file => ({
      file,
      preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : null,
    }));
    setFiles(selected);
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map(msg => (
          <div key={msg.id} className={`message ${msg.sender}`}>
            {msg.text && <p>{msg.text}</p>}
            {msg.attachments.map((att, idx) => (
              att.preview ? (
                <img key={idx} src={att.preview} alt="attachment" />
              ) : (
                <a key={idx} href="#" download={att.file.name}>
                  {att.file.name}
                </a>
              )
            ))}
          </div>
        ))}
      </div>
      <div className="input-area">
        {files.length > 0 && (
          <div className="preview">
            {files.map((f, idx) => (
              f.preview ? (
                <img key={idx} src={f.preview} alt="preview" />
              ) : (
                <span key={idx}>{f.file.name}</span>
              )
            ))}
          </div>
        )}
        <input
          type="text"
          placeholder="Type a message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <input type="file" multiple onChange={handleFileChange} />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
