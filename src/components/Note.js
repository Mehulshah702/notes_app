import {MdDeleteForever} from 'react-icons/md';

const Note = () => {
    return <div className="note">
        <span>This is our first Note!</span>
        <div className="note-footer">
            <small>25/25/2025</small>
            <MdDeleteForever className='delete-icon' size='1.3em'/>

        </div>
    </div>
}

export default Note;