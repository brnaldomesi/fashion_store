source 'https://rubygems.org'

gem 'cocoapods', '~> 1.5.3'

bundle exec "
echo '\n###########################################'
echo '############ 🛒 FASTBUY APP 🛒 ############\n'

echo '>>> Installing React Native dependencies...\n'
npm install
if [ $? -ne 0 ]; then
	echo '⚠️  Something went wrong. Try to execute `npm install`.\n'
fi

echo '>>> Installing iOS dependencies...\n'
cd ios && pod install && cd ..
echo ''

if [ ! -d 'node_modules/react-native/third-party' ]; then
	echo '>>> Making some adjustments to Xcode 10...\n'
	cd node_modules/react-native ; ./scripts/ios-install-third-party.sh ; cd ../../
	if [ $? -ne 0 ]; then
		echo '⚠️  Something went wrong. Open `ios/fastbuy.xcworkspace` on Xcode and build the project.\n'
	fi

	echo '>>> Making another adjustments to Xcode 10...\n'
	cd node_modules/react-native/third-party/glog-0.3.5/ ; ../../scripts/ios-configure-glog.sh ; cd ../../../../
	if [ $? -ne 0 ]; then
		echo '⚠️  Something went wrong. Open `ios/fastbuy.xcworkspace` on Xcode and build the project.\n'
	fi
fi

echo '👉👉👉 Please open the project in Android Studio (necessary to automatically generate `local.properties` file). 👈👈👈 \n'

echo '########## 🎉 DONE. HAVE FUN! 🎉 ##########'
echo '###########################################\n'
"
