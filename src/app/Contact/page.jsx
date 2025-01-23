import React from 'react';

const pageContact = () => {
    return (
        <div className='py-16 text-center grid grid-cols-1'>
            <div className="rating gap-1 mx-auto py-2">
                <input type="radio" name="rating-3" className="mask mask-heart bg-red-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-orange-400"/>
                <input type="radio" name="rating-3" className="mask mask-heart bg-yellow-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-lime-400" />
                <input type="radio" name="rating-3" className="mask mask-heart bg-green-400" />
            </div>
            <div className="stack m-8">
                <div className="card bg-primary text-primary-content shadow-md">
                    <div className="card-body">
                        <h2 className="card-title">Notification 1</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div className="card bg-primary text-primary-content shadow">
                    <div className="card-body">
                        <h2 className="card-title">Notification 2</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
                <div className="card bg-primary text-primary-content shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title">Notification 3</h2>
                        <p>You have 3 unread messages. Tap here to see.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default pageContact;