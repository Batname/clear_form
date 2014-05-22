namespace :db do
  desc "Fill database with sample data"
  task populate: :environment do
    make_users
    make_teams
    make_services
    make_work_category
    make_work
    make_social_icon
  end
end


def make_users
  admin = User.create!(name: "Example User",
                       email: "example@railstutorial.org",
                       password: "foobar",
                       password_confirmation: "foobar",
                       admin: true)
  99.times do |n|
    name = Faker::Name.name
    email = "example-#{n+1}@railstutorial.org"
    password = "password"
    User.create!(name: name,
                 email: email,
                 password: password,
                 password_confirmation: password)
  end
end

def make_teams
  Team.create!(position: 1,
               name: "Katerina",
               image: "/images/teams/Katerina.jpg",
               visible: 1,
               content: "Katerina",
               teamclass: "katerina",)
  Team.create!(position: 2,
               name: "Nikita",
               image: "/images/teams/nikita.jpg",
               visible: 1,
               content: "Nikita",
               teamclass: "nikita",)
  Team.create!(position: 3,
               name: "Irina",
               image: "/images/teams/irina.jpg",
               visible: 1,
               content: "Irina",
               teamclass: "irina",)
  Team.create!(position: 4,
               name: "Julia",
               image: "/images/teams/julia.jpg",
               visible: 1,
               content: "Julia",
               teamclass: "julia",)
  Team.create!(position: 5,
               name: "Join",
               image: "/images/teams/join.jpg",
               visible: 1,
               content: "Join",
               teamclass: "join",)

end


def make_services
  Service.create!(position: 1,
                  title: "YOUR IMAGE",
                  visible: 1,
                  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image: "images/iMac.png",)
  Service.create!(position: 2,
                  title: "YOUR AMUSEMENT",
                  visible: 1,
                  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image: "images/iPad.png",)
  Service.create!(position: 3,
                  title: "YOUR COMFORT",
                  visible: 1,
                  content: " Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image: "images/iPhone.png",)
  Service.create!(position: 4,
                  title: "YOUR PRODUCTIVITY",
                  visible: 1,
                  content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
                  image: "images/Macbook.png",)
end

def make_work_category
  WorkCategory.create!(category: "BRANDING",)
  WorkCategory.create!(category: "WEB",)
  WorkCategory.create!(category: "PRINT",)
  WorkCategory.create!(category: "PACKING",)
  WorkCategory.create!(category: "ARCHITECTURAL DESIGN",)
  WorkCategory.create!(category: "APPS",)
  WorkCategory.create!(category: "GAMEDEV",)
end


def make_work
  Work.create!(
               image: "images/gallery/small/branding/small_branding.jpg",
               work_category_id: 1
               )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 2
  )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 3
  )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 4
  )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 5
  )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 6
  )
  Work.create!(
      image: "images/gallery/small/branding/small_branding.jpg",
      work_category_id: 7
  )

end


def make_social_icon
  SocialIcon.create!(
      scr1: "images/social/twitter-norm.png",
      scr2: "images/social/twitter-sel.png",
  )
  SocialIcon.create!(
      scr1: "images/social/facebook-norm.png",
      scr2: "images/social/facebook-sel.png",
  )
  SocialIcon.create!(
      scr1: "images/social/linkedin-norm.png",
      scr2: "images/social/linkedin-sel.png",
  )
  SocialIcon.create!(
      scr1: "images/social/ball-norm.png",
      scr2: "images/social/ball-sel.png",
  )
  SocialIcon.create!(
      scr1: "images/social/beh-norm.png",
      scr2: "images/social/beh-sel.png",
  )

end
