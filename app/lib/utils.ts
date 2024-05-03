import { message, sentMessage, chatMessage } from "@/app/lib/definitions";
import { chat } from "@/app/lib/definitions";
import { messages } from "./placeholderdata";

export function formatDateTime(date: Date): string {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "pm" : "am";

  const todaysdate = new Date();

  // Convert hours from 24-hour format to 12-hour format
  const formattedHours = hours % 12 || 12;

  // Pad minutes with leading zero if necessary
  const formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

  if ((date = todaysdate)) {
    return `Today ${formattedHours}:${formattedMinutes} ${ampm}`;
  }
  return `${day} ${month} ${year} ${formattedHours}:${formattedMinutes} ${ampm}`;
}

export function getpercentage(total: number, number: number): number {
  const percentage = ((number / total) * 100).toFixed(1);
  return Number(percentage);
}

export function handleMessages(messagesArray: message[]): chat[] {
  const chat: chat[] = [];

  for (const message of messagesArray) {
    const existingChatIndex = chat.findIndex(
      (chatItem) => chatItem.Authorid === message.author.id
    );

    if (existingChatIndex !== -1) {
      chat[existingChatIndex].messages.push({
        chatmessage: message.content,
        time: message.time,
        type: "received",
      });
    } else {
      const newChatObject: chat = {
        Authorid: message.author.id,
        AuthorProfileImage: message.author.profileImg,
        AuthorName: message.author.names,
        messages: [
          {
            chatmessage: message.content,
            time: message.time,
            type: "received",
          },
        ],
        time: message.time,
      };
      chat.push(newChatObject);
    }
  }

  return chat;
}

export function groupChats(
  receivedmessages: chat,
  sentmessages: sentMessage
): chatMessage[] {
  const chats: Array<chatMessage> = [];
  chats.push(...receivedmessages.messages, ...sentmessages.contents);
  return chats;
}

export function sortbytime(groupedchat: chatMessage[]): Array<chatMessage> {
  groupedchat.sort((a, b) => {
    return new Date(a.time).getTime() - new Date(b.time).getTime();
  });

  return groupedchat;
}
