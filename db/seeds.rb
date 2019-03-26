25.times do
    Blog.create(
      name: Faker::Commerce.product_name,
      body: Faker::Lorem.sentence
    )
end

puts "Seeded"