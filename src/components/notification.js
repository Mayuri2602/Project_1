import React, { useState } from 'react';
import Notification from './Notification';

const DocumentEditor = () => {
    const [notification, setNotification] = useState({ message: '', type: '', duration: 3000 });

    const handleSave = () => {
        // Logic to save the document
        showNotification('Document saved successfully!', 'success');
    };

    const showNotification = (msg, type) => {
        setNotification({ message: msg, type });
        setTimeout(() => {
            setNotification({ message: '', type: '' });
        }, 3000);
    };

    return (
        <div>
            <button onClick={handleSave}>Save Document</button>
            {notification.message && (
                <Notification
                    message={notification.message}
                    type={notification.type}
                    onDismiss={() => setNotification({ message: '', type: '' })}
                />
            )}
            {/* Document editing UI */}
        </div>
    );
};

export default DocumentEditor;