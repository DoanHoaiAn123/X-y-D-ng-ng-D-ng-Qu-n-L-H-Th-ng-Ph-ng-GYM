import 'package:flutter/material.dart';

void main() {
  runApp(const AlphaFitnessApp());
}

class AlphaFitnessApp extends StatelessWidget {
  const AlphaFitnessApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Alpha Fitness',
      theme: ThemeData(primarySwatch: Colors.blue),
      home: const LoginScreen(),
    );
  }
}

// Login Screen
class LoginScreen extends StatelessWidget {
  const LoginScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Center(
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Image.asset('assets/logo.png', height: 100),
                const SizedBox(height: 40),
                const TextField(
                  decoration: InputDecoration(
                    labelText: 'Tên đăng nhập',
                    border: OutlineInputBorder(),
                  ),
                ),
                const SizedBox(height: 16),
                const TextField(
                  obscureText: true,
                  decoration: InputDecoration(
                    labelText: 'Mật khẩu',
                    border: OutlineInputBorder(),
                  ),
                ),
                Row(
                  children: [
                    Checkbox(value: true, onChanged: (_) {}),
                    const Text('Ghi nhớ')
                  ],
                ),
                const SizedBox(height: 24),
                SizedBox(
                  width: double.infinity,
                  child: ElevatedButton(
                    onPressed: () {
                      Navigator.pushReplacement(
                        context,
                        MaterialPageRoute(builder: (context) => const HomeScreen()),
                      );
                    },
                    child: const Text('Đăng nhập'),
                  ),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

// Home Screen (Dashboard)
class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Alpha Fitness')),
      body: GridView.count(
        crossAxisCount: 2,
        padding: const EdgeInsets.all(16),
        children: [
          _buildDashboardCard(context, Icons.people, 'Tài khoản', () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const AccountScreen()),
            );
          }),
          _buildDashboardCard(context, Icons.fitness_center, 'Sản phẩm', () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const ProductScreen()),
            );
          }),
          _buildDashboardCard(context, Icons.local_offer, 'Khuyến mãi', () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const PromotionScreen()),
            );
          }),
          _buildDashboardCard(context, Icons.bar_chart, 'Thống kê', () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const ReportScreen()),
            );
          }),
          _buildDashboardCard(context, Icons.settings, 'Cài đặt', () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => const SettingsScreen()),
            );
          }),
          _buildDashboardCard(context, Icons.logout, 'Đăng xuất', () {
            Navigator.pushReplacement(
              context,
              MaterialPageRoute(builder: (context) => const LoginScreen()),
            );
          }),
        ],
      ),
    );
  }

  Widget _buildDashboardCard(BuildContext context, IconData icon, String title, VoidCallback onTap) {
    return Card(
      child: InkWell(
        onTap: onTap,
        child: Center(
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Icon(icon, size: 48),
              const SizedBox(height: 8),
              Text(title, style: const TextStyle(fontSize: 16))
            ],
          ),
        ),
      ),
    );
  }
}

// Account Management
class AccountScreen extends StatelessWidget {
  const AccountScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Quản lý tài khoản')),
      body: ListView.builder(
        itemCount: 10,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon(Icons.person),
          title: Text('Nhân viên ${index + 1}'),
          subtitle: const Text('Vai trò: Quản lý'),
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(icon: const Icon(Icons.edit), onPressed: () {}),
              IconButton(icon: const Icon(Icons.delete), onPressed: () {}),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}

// Product Management
class ProductScreen extends StatelessWidget {
  const ProductScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Quản lý sản phẩm')),
      body: ListView.builder(
        itemCount: 10,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon(Icons.image),
          title: Text('Sản phẩm ${index + 1}'),
          subtitle: const Text('Giá: 100.000đ'),
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(icon: const Icon(Icons.edit), onPressed: () {}),
              IconButton(icon: const Icon(Icons.delete), onPressed: () {}),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}

// Promotion Management
class PromotionScreen extends StatelessWidget {
  const PromotionScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Quản lý khuyến mãi')),
      body: ListView.builder(
        itemCount: 5,
        itemBuilder: (context, index) => ListTile(
          leading: const Icon(Icons.discount),
          title: Text('KM ${index + 1}'),
          subtitle: const Text('Giảm 20% - Từ 01/06 đến 15/06'),
          trailing: Row(
            mainAxisSize: MainAxisSize.min,
            children: [
              IconButton(icon: const Icon(Icons.edit), onPressed: () {}),
              IconButton(icon: const Icon(Icons.delete), onPressed: () {}),
            ],
          ),
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {},
        child: const Icon(Icons.add),
      ),
    );
  }
}

// Report Management
class ReportScreen extends StatelessWidget {
  const ReportScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Thống kê báo cáo')),
      body: ListView(
        padding: const EdgeInsets.all(16),
        children: const [
          ListTile(
            leading: Icon(Icons.pie_chart),
            title: Text('Doanh thu tháng 5'),
            subtitle: Text('100.000.000đ'),
          ),
          ListTile(
            leading: Icon(Icons.show_chart),
            title: Text('Khách hàng mới'),
            subtitle: Text('250 người'),
          ),
        ],
      ),
    );
  }
}

// Settings
class SettingsScreen extends StatelessWidget {
  const SettingsScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Cài đặt hệ thống')),
      body: ListView(
        children: const [
          ListTile(
            leading: Icon(Icons.lock),
            title: Text('Đổi mật khẩu'),
          ),
          ListTile(
            leading: Icon(Icons.language),
            title: Text('Ngôn ngữ'),
          ),
          ListTile(
            leading: Icon(Icons.info),
            title: Text('Giới thiệu ứng dụng'),
          ),
        ],
      ),
    );
  }
}
