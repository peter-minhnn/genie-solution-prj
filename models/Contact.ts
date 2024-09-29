import mongoose from "mongoose";

export interface Contact extends mongoose.Document {
    name: string;
    email: string;
    message: string;
}

/* ContactSchema will correspond to a collection in your MongoDB database. */
const ContactSchema = new mongoose.Schema<Contact>({
    name: {
        /* The name of this pet */

        type: String,
        required: [true, "Please provide a name."],
    },
    email: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the email"],
    },
    message: {
        /* The owner of this pet */

        type: String,
        required: [true, "Please provide the message"],
    },
}, {
    collection: "contacts"
});

export default mongoose.models.Contact || mongoose.model<Contact>("Contact", ContactSchema);