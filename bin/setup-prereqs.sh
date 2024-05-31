#! /bin/sh

# echo "Checking for unzip..."
# UNZIP_COMMAND_RESULT=$(command -v unzip)
# if [ -z "$UNZIP_COMMAND_RESULT" ]; then
#     echo "unzip could not be found, installing..."
#     echo ""

#     sudo apt install unzip
# else
#     echo "unzip already installed, skipping install..."
#     echo ""
# fi

# echo "Checking for fnm..."
# FNM_COMMAND_RESULT=$(command -v fnm)
# FNM_PATH="/home/$USER/.local/share/fnm"
# if [ -z "$FNM_COMMAND_RESULT"]; then
#     if [ ! -d "$FNM_PATH" ]; then
#         echo "fnm could not be found, installing..."
#         echo ""

#         curl -fsSL https://fnm.vercel.app/install | bash
#         echo ""
#     fi

#     echo "checking for fnm install path"
#     if [ -d "$FNM_PATH" ]; then
#         echo "fnm command found at: $FNM_PATH"

#         echo "setting up path for fnm..."
#         export PATH="/home/ecarlste/.local/share/fnm:$PATH"

#         eval "$(fnm env | grep export)"
#         hash -r

#         echo "finished setting up path for fnm..."
#         echo ""
#     fi
# else
#     echo "fnm already installed, skipping install..."
# fi

# echo "Using fnm to install Node.js..."
# fnm use --install-if-missing 20.14.0

# echo "Installing Corepack..."
# npm install -g corepack

# Install pnpm
curl -fsSL https://get.pnpm.io/install.sh | sh -p
