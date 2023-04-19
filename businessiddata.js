import { faker } from "@faker-js/faker";

const amountCurrency = { amount: 10, currency: "SGD" };
const senderEntity = { id: 1 };

function updateAmountCurrency() {
    var currency = faker.helpers.arrayElement(["IDR", "SGD"]);
    if (currency == "IDR") {
        let randomnumber = faker.datatype.number({ min: 1, max: 2000 });

        var amount = randomnumber * 1000;
    }
    else {
        var amount = faker.commerce.price(1, 200, 0);
    }
    amountCurrency["amount"] = amount;
    amountCurrency["currency"] = currency;
}

function updateBusiness() {
    let MAX_BUSINESS_ID = 200;

    // Generate a random number between 100000 and MAX_BUSINESS_ID
    let businessId = faker.datatype.number({ min: 1, max: MAX_BUSINESS_ID });

    // Convert the business id to a string and pad with zeros to a length of 6
    let paddedBusinessId = businessId.toString().padStart(21, '0');
    senderEntity["id"] = paddedBusinessId;
}

export default function businessData() {
    updateAmountCurrency();
    updateBusiness();

    let transaction = {
        business_id: senderEntity.id,
        type: "TRANSACTION",
        occurred_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
        status: faker.helpers.arrayElement(["COMPLETED", "NOT COMPLETED"]),
        type: faker.helpers.arrayElement(["MONEY_IN", "MONEY_OUT"]),
        channel: faker.helpers.arrayElement(["CHANNEL_1", "CHANNEL_2"]),
        channel_type: faker.helpers.arrayElement(["CHANNEL_TYPE_1", "CHANNEL_TYPE_2"]),
        amount: amountCurrency.amount,
        currency: amountCurrency.currency,
        recipient_account_detail: {
            bank_code: faker.finance.account(25),
            account_number: faker.finance.account(80),
        },
        custom_data: {
            card_number: faker.finance.creditCardNumber('63[7-9]#-####-####-###L'),
            card_country: faker.address.country(),
            eci_code: faker.finance.account(25)
        },
        created_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
        updated_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z')
    }

    return transaction;
}
