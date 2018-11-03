source 'https://rubygems.org'

gem 'cocoapods', '~> 1.5.3'

bundle exec "
npm install

cd ios && pod install && cd ..

if [ ! -d 'node_modules/react-native/third-party' ]; then
  cd node_modules/react-native ; ./scripts/ios-install-third-party.sh ; cd ../../
  cd node_modules/react-native/third-party/glog-0.3.5/ ; ../../scripts/ios-configure-glog.sh ; cd ../../../../
fi
"
