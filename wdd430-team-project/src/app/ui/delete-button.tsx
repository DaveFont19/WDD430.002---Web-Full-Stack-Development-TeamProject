"use client";

interface DeleteButtonProps {
  id: string;
  name: string;
}

export default function DeleteButton({ id, name }: DeleteButtonProps) {
  const handleDelete = () => {
    const confirmed = true;//change this to server delete 
    
    if (confirmed) {
      console.log("Deleting Product:", id);
      alert("Product deleted (simulation)");
    }
  };

  return (
    <button 
      onClick={handleDelete}
      style={{ 
        flex: 1, 
        padding: '8px', 
        cursor: 'pointer', 
        borderRadius: '4px', 
        border: '1px solid #ff4444', 
        color: '#ff4444', 
        background: 'none',
        fontSize: '0.9rem',
        fontWeight: '600'
      }}
    >
      Delete
    </button>
  );
}