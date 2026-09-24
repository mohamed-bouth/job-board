export function queryKeysValuesHelper(data) {
    const dataKeys = Object.keys(data[0]);
    let dataKeysToText = '('
    dataKeysToText += dataKeys.join(",");
    dataKeysToText += ")"

    const dataValuesToText = data.reduce((text, data) => {
        const dataValues = Object.values(data);

        text += `('${dataValues.join("','")}'),`;

        return text;
    }, "");

    return {
        keys : dataKeysToText,
        values : dataValuesToText
    }
}