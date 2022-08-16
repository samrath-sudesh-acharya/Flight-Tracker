from github import Github
g = Github("samrath-sudesh-acharya", "samRath@282").get_user()
repo = g.get_repo("samrath-sudesh-acharya/demo")
print(repo)
# all_files = []
# contents = repo.get_contents("")
# while contents:
#     file_content = contents.pop(0)
#     if file_content.type == "dir":
#         contents.extend(repo.get_contents(file_content.path))
#     else:
#         file = file_content
#         all_files.append(str(file).replace('ContentFile(path="','').replace('")',''))

# print(all_files)
