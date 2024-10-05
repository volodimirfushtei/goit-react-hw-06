import { deleteContact } from "../../redux/contactsSlice";
import { addContact } from "../../redux/contactsSlice";

const initialState = {
  contacts: {
    items: [],
  },
  filters: {
    name: "",
  },
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case addContact.type:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: [...state.contacts.contacts, action.payload],
        },
      };

    case deleteContact.type:
      return {
        ...state,
        contacts: {
          ...state.contacts,
          items: state.contacts.items.filter(
            (item) => item.id !== action.payload
          ),
        },
      };

    default:
      return state;
  }
};
