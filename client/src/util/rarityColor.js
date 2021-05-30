function rarityColor(grade) {
    switch (grade) {
        case "Consumer Grade":
            return "consumer";
        case "Industrial Grade":
            return "industrial";
        case "Mil-Spec Grade":
            return "military";
        case "Restricted":
            return "restricted";
        case "Classified":
            return "classified";
        case "Covert":
            return "covert";

        default: 
            return;
    }
};

module.exports = rarityColor;