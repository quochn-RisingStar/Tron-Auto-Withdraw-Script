
# 🌀 Tron Auto Withdraw Script

This Node.js script automatically withdraws TRX from the current Tron wallet address to a recipient address at regular intervals, keeping a small reserve for transaction fees.

---

## 📦 Features

- Uses [TronWeb](https://github.com/tronprotocol/tron-web) to interact with the TRON blockchain.
- Automatically checks wallet balance every 10 seconds.
- Withdraws all TRX above a configured reserve amount to a recipient address.
- Logs transaction time, amount, and transaction ID.

---

## 🚀 Requirements

- Node.js (v14+ recommended)
- A `.env` file containing your private key and recipient address

---

## 🛠️ Setup

1. **Clone the repo or create the file**  
   Save the script to a file, e.g., `autoWithdraw.js`.

2. **Install dependencies**

   ```bash
   npm install tronweb dotenv

3. **Create a `.env` file**
   In the same directory, create a `.env` file with the following contents:

   ```ini
   PRIVATE_KEY=your_tron_private_key
   RECIPIENT=recipient_tron_address
   ```

4. **Run the script**

   ```bash
   node autoWithdraw.js
   ```

---

## ⚙️ Configuration

* `FEE_RESERVE_TRX`: Number of TRX to keep in the wallet to cover future transaction fees (default is 5 TRX).
* `setInterval(autoWithdraw, 10 * 1000)`: Runs the withdraw function every 10 seconds. You can change the interval as needed.

---

## 📋 Sample Output

```yaml
🕒 [06/06/2025, 16:21:10] Đang kiểm tra số dư...
📦 Balance: 20 TRX
✅ Đã rút 15 TRX → TNFq3...
🔗 TxID: 9f7a0d...
```

---

## ⚠️ Notes

* Make sure your wallet has enough TRX to cover transaction fees.
* Comment/uncomment the condition block in `autoWithdraw()` to restrict withdrawing only when the balance exceeds the reserve.
* Use responsibly. This script continuously monitors and transfers TRX on the mainnet.

---

## 📄 License

MIT License

