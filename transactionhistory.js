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
    let MAX_BUSINESS_ID = 300000;

    // Generate a random number between 100000 and MAX_BUSINESS_ID
    let businessId = faker.datatype.number({ min: 1, max: MAX_BUSINESS_ID });

    // Convert the business id to a string and pad with zeros to a length of 6
    let paddedBusinessId = businessId.toString().padStart(21, '0');
    senderEntity["id"] = paddedBusinessId;
}

const businessEntity = [];
class business {
    constructor(id, name, address, site, email, phone) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.site = site;
        this.email = email;
        this.phone = phone;
    }
}
function initBusiness() {
    for (let i = 0; i < 100; i++) {
        businessEntity.push(new business(faker.database.mongodbObjectId(), faker.company.name(), faker.address.streetAddress(true), faker.internet.url(), faker.internet.email(), faker.phone.number()))
    }
}

export default function transactionHistory() {

    updateAmountCurrency();
    updateBusiness();
    initBusiness();
    let randomNumber = faker.datatype.number({ min: 0, max: 100 });

    let transaction = {

        business_id: "",
        type: "TRANSACTION",
        occurred_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
        status: faker.helpers.arrayElement(["COMPLETED", "NOT COMPLETED"]),
        type: faker.helpers.arrayElement(["MONEY_IN", "MONEY_OUT"]),
        channel: faker.helpers.arrayElement(["CHANNEL_1", "CHANNEL_2"]),
        channel_type: faker.helpers.arrayElement(["CHANNEL_TYPE_1", "CHANNEL_TYPE_2"]),
        amount: amountCurrency.amount,
        currency: amountCurrency.currency,
        sender_entity_id: senderEntity.id,
        sender_detail: {
            id: faker.database.mongodbObjectId(),
            name: faker.name.fullName(),
            type: faker.helpers.arrayElement(["TYPE_1", "TYPE_2"]),
            golive_at: null,
            business_data: {
                entity_segment: faker.helpers.arrayElement(["SEGMENT1", "SEGMENT1"]),
                entity_type: faker.helpers.arrayElement(["ENTITY_TYPE1", "ENTITY_TYPE2"]),
                name: businessEntity[randomNumber].name,
                email: businessEntity[randomNumber].email,
                phone: businessEntity[randomNumber].phone,
                address: businessEntity[randomNumber].address,
                golive_status: faker.helpers.arrayElement(["LIVE", "NOTLIVE"]),
                website: businessEntity[randomNumber].site,
                first_transacted_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
                country_of_registration: faker.helpers.arrayElement(["SG", "ID"]),
                owner_name: faker.name.fullName(),
                owner_phone: faker.phone.number(),
                owner_email: faker.internet.email(),
                risk_score: faker.datatype.number({ min: 1, max: 100 })
            },
            individual_data: {
                date_of_birth: faker.date.birthdate({ min: 1945, max: 2000, mode: 'year' }),
                name: faker.name.fullName(),
                email: faker.internet.email(),
                phone: faker.phone.number(),
                nationality: faker.address.country(),
                gender: faker.name.gender(true),
                first_transacted_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
            },
            device_data: {
                fingerprint_session_id: faker.database.mongodbObjectId(),
                ip_address: faker.internet.ip()
            },
            accounts: faker.finance.account(5),
            custom_data: faker.finance.account(4)
        },
        sender_account_detail: {
            id: faker.database.mongodbObjectId(),
            type: faker.helpers.arrayElement(["SENDER_TYPE1", "SENDER_TYPE2"]),
            bank_code: faker.finance.account(10),
            currency: amountCurrency.currency,
            account_number: faker.finance.account(80),
            holder_id: faker.database.mongodbObjectId()
        },
        recipient_entity_id: faker.database.mongodbObjectId(),
        recipient_detail: {
            id: faker.database.mongodbObjectId(),
            name: faker.name.fullName(),
            type: faker.helpers.arrayElement(["RECIPIENT_TYPE1", "RECIPIENT_TYPE2"]),
            golive_at: null,
            business_data: {
                entity_segment: faker.helpers.arrayElement(["SEGMENT_1", "SEGMENT_2"]),
                entity_type: faker.helpers.arrayElement(["ENTITY_TYPE1", "ENTITY_TYPE2"]),
                name: businessEntity[randomNumber].name,
                email: businessEntity[randomNumber].email,
                phone: businessEntity[randomNumber].phone,
                address: businessEntity[randomNumber].address,
                golive_status: faker.helpers.arrayElement(["LIVE", "NOTLIVE"]),
                website: businessEntity[randomNumber].site,
                first_transacted_at: null,
                country_of_registration: faker.helpers.arrayElement(["SG", "ID"]),
                owner_name: faker.name.fullName(),
                owner_phone: faker.phone.number(),
                owner_email: faker.internet.email(),
                risk_score: faker.datatype.number({ min: 1, max: 100 })
            },
            individual_data: {
                date_of_birth: "",
                name: "",
                email: "",
                phone: "",
                nationality: "",
                gender: "",
                first_transacted_at: null
            },
            device_data: {
                fingerprint_session_id: faker.database.mongodbObjectId(),
                ip_address: faker.internet.ip()
            },
            accounts: faker.finance.account(80),
            custom_data: {
                card_number: faker.finance.creditCardNumber('63[7-9]#-####-####-###L'),
                card_country: faker.address.country(),
                eci_code: faker.finance.account(25)
            },
        },
        recipient_account_detail: {
            id: faker.database.mongodbObjectId(),
            type: faker.helpers.arrayElement(["RECIPIENT_TYPE1", "RECIPIENT_TYPE2"]),
            bank_code: faker.finance.account(10),
            currency: amountCurrency.currency,
            account_number: faker.finance.account(25),
            holder_id: faker.database.mongodbObjectId()
        },
        device_data: {
            fingerprint_session_id: faker.database.mongodbObjectId(),
            ip_address: faker.internet.ipv4(),
        },
        created_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z'),
        updated_at: faker.date.between('2023-04-01T00:00:00.000Z', '2023-04-16T00:00:00.000Z')


    }
    return transaction;
}
