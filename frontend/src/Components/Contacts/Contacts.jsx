import ContactItem from './ContactItem';
import React, { useContext, useEffect } from 'react';
import ContactContext from '../../context/contacts/ContactContext';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

const Contacts = () => {
    const contactContext = useContext(ContactContext);
    let { contacts, filtered, getContacts, loading } = contactContext;

    useEffect(() => {
        getContacts();
        // eslint-disable-next-line
    }, [])

    if (contacts !== null && contacts.length === 0 && !loading) {
        return <h4>Please add a contact.</h4>
    }

    return (
        <>
            {contacts !== null && !loading ? (<TransitionGroup>
                {filtered !== null ? filtered.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames='contact'>
                        <ContactItem contact={contact} />
                    </CSSTransition>
                )) : contacts.map(contact => (
                    <CSSTransition key={contact._id} timeout={500} classNames='contact'>
                        <ContactItem contact={contact} />
                    </CSSTransition>
                ))}
            </TransitionGroup>) : (<p>Loading</p>)}
        </>
    )
}

export default Contacts