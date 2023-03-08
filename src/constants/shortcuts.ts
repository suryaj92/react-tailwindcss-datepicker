import dayjs from "dayjs";

import { formatDate, previousMonth } from "../helpers";
import { ShortcutsItem } from "../types";

const DEFAULT_SHORTCUTS: {
    [key in string]: ShortcutsItem | ShortcutsItem[];
} = {
    today: {
        text: "Today",
        period: {
            start: formatDate(dayjs()),
            end: formatDate(dayjs())
        }
    },
    yesterday: {
        text: "Yesterday",
        period: {
            start: formatDate(dayjs().subtract(1, "d")),
            end: formatDate(dayjs().subtract(1, "d"))
        }
    },
    past: [
        {
            daysNumber: 7,
            text: "Last 7 days",
            period: {
                start: formatDate(dayjs().subtract(7, "d")),
                end: formatDate(dayjs())
            }
        },
        {
            daysNumber: 15,
            text: "Last 15 days",
            period: {
                start: formatDate(dayjs().subtract(15, "d")),
                end: formatDate(dayjs())
            }
        }
    ],
    pastMonth: {
        text: "Last month",
        period: {
            start: formatDate(previousMonth(dayjs()).startOf("month")),
            end: formatDate(previousMonth(dayjs()).endOf("month"))
        }
    },
    customRange: {
        text: "Custom Range",
        period: {
            start: formatDate(dayjs()),
            end: formatDate(dayjs())
        }
    }
};

export default DEFAULT_SHORTCUTS;
