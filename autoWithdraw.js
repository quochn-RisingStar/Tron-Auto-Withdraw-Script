const TronWeb = require('tronweb');


require('dotenv').config();

const tronWeb = new TronWeb({
    fullHost: 'https://api.trongrid.io',
    privateKey: process.env.PRIVATE_KEY,
});

const recipient = process.env.RECIPIENT;
const FEE_RESERVE_TRX = 5;

function getTimeStamp() {
    return new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
}

async function autoWithdraw() {
    console.log(`\n🕒 [${getTimeStamp()}] Đang kiểm tra số dư...`);
    try {
        const sender = tronWeb.defaultAddress.base58;
        const balance = await tronWeb.trx.getBalance(sender);
        const feeReserve = FEE_RESERVE_TRX * 1e6;

        console.log(`📦 Balance: ${balance / 1e6} TRX`);

        // if (balance > feeReserve) {
        const amount = balance - feeReserve;
        const tx = await tronWeb.trx.sendTransaction(recipient, amount);
        console.log(`✅ Đã rút ${amount / 1e6} TRX → ${recipient}`);
        console.log(`🔗 TxID: ${tx.txid}`);
        // } else {
        //     console.log(`⚠️ Không đủ TRX để rút (tối thiểu giữ lại ${FEE_RESERVE_TRX} TRX cho phí)`);
        // }
    } catch (err) {
        console.error('❌ Lỗi khi rút:', err);
    }
}

setInterval(autoWithdraw, 10 * 1000); // chạy mỗi 30 giây
